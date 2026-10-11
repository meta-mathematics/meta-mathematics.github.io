# Fundamental Theorem of Calculus

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** AC-02  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For continuous $f:[a,b]\to\mathbb R$, prove $F(x)=\int_a^x f(t)\,dt$ is differentiable on $(a,b)$ with $F'=f$. If $G'=f$ there and $G$ is continuous on $[a,b]$, prove $\int_a^b f=G(b)-G(a)$.

**Foundations and permitted imports:**

Use Riemann integrability of continuous functions on[a,b], additivity and integral bounds, and AC-01. An integral with reversed endpoints changes sign. Derivatives of accumulated integrals are taken on(a,b), with one-sided endpoint continuity.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Differentiate the accumulated integral
N2 [v1] Compare any antiderivative
  N1 -- E1: F is continuous on[a,b] and differentiable inside with F′=f. --> N2
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | F is continuous on[a,b] and differentiable inside with F′=f. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |

## 3. Node roles and faculty activities

### N1/v1 — Differentiate the accumulated integral

**Object, role, and local target:** Estimate the difference between a local average and f(x). The required export is: F is continuous on[a,b] and differentiable inside with F′=f.

**Inputs:** Continuous f; F(x)=∫_a^x f; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AC-02.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Continuous f; F(x)=∫_a^x f; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Estimate the difference between a local average and f(x). |
| Sense | For negative h, the reversed interval must be treated consistently. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** F is continuous on[a,b] and differentiable inside with F′=f. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Compare any antiderivative

**Object, role, and local target:** Use the mean value theorem on G−F. The required export is: The two asserted parts of the continuous-integrand FTC.

**Inputs:** G′=f inside and G continuous on[a,b]; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AC-02.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain G′=f inside and G continuous on[a,b]; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Use the mean value theorem on G−F. |
| Sense | An antiderivative must be continuous at the stated endpoints. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** The two asserted parts of the continuous-integrand FTC. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Differentiate the accumulated integral

1. For x interior and sufficiently small nonzero h, additivity gives(F(x+h)−F(x))/h=(1/h)∫_x^{x+h}f(t)dt.

2. Subtract f(x); the absolute difference is bounded by sup between x andx+h of|f(t)−f(x)|, including h<0 using reversed integration.

3. Continuity makes this bound tend to 0.

4. Thus F′(x)=f(x).

5. A global bound on|f| also gives|F(x)−F(y)|≤M|x−y|, so F is continuous through the endpoints.

### §4.N2 — Compare any antiderivative

1. Let H=G−F.

2. It is continuous on[a,b] and H′=0 inside.

3. For any u<v in[a,b], AC-01 yields H(v)−H(u)=H′(c)(v−u)=0.

4. Thus H is constant.

5. Since F(a)=0 and F(b)=∫_a^b f, subtract endpoint values to obtain G(b)−G(a)=F(b)−F(a)=∫_a^b f.

6. This closes the accumulation and antiderivative directions.

## 5. Worked instance and boundary audit

For f(t)=3t² on[0,2], F(x)=x³ and G(x)=x³+7. Then G(2)−G(0)=8=∫₀²3t²dt, while F′=3x² demonstrates the local-average limit.

**Boundary or failed-argument audit:**

A discontinuous integrand may be Riemann integrable without F′=f at every point: take f=0 except f(0)=1 on[−1,1]. Its accumulated integral is 0, whose derivative at 0 is 0. Sense retains continuity for this pointwise FTC version.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `AC-02`, version 1, and the proof with every reuse. Intermediate exports E1–E2 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
