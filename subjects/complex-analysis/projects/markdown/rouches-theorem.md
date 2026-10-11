# Rouché’s Theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** CA-04  
**Level:** Intermediate    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a bounded Jordan domain with piecewise smooth boundary, let $f,g$ be holomorphic near its closure and satisfy $|g|<|f|$ on the boundary. Prove $f$ and $f+g$ have the same number of interior zeros, counted with multiplicity.

**Foundations and permitted imports:**

Import the argument principle: for holomorphic h near a bounded piecewise smooth Jordan domain closure and no boundary zero, (2πi)⁻¹∮h′/h is the number of interior zeros counted with multiplicity. It follows from the residue theorem by locally factoring each zero h=(z−a)^m u with u(a)≠0. The domain has positive boundary orientation.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Nonvanishing homotopy
N2 [v1] Integer-valued zero count
  N1 -- E1: A uniform boundary lower bound δ>0 for all h_t. --> N2
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | A uniform boundary lower bound δ>0 for all h_t. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |

## 3. Node roles and faculty activities

### N1/v1 — Nonvanishing homotopy

**Object, role, and local target:** Keep a strict lower bound for the entire deformation. The required export is: A uniform boundary lower bound δ>0 for all h_t.

**Inputs:** |g|<|f| on the compact boundary; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `CA-04.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain |g|<|f| on the compact boundary; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Keep a strict lower bound for the entire deformation. |
| Sense | Strict inequality is used on every boundary point. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** A uniform boundary lower bound δ>0 for all h_t. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Integer-valued zero count

**Object, role, and local target:** Use continuity in t and integrality. The required export is: The number of zeros stays constant along the homotopy.

**Inputs:** Boundary lower bound; argument principle; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `CA-04.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Boundary lower bound; argument principle; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Use continuity in t and integrality. |
| Sense | A zero crossing the boundary would invalidate the invariant. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** The number of zeros stays constant along the homotopy. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Nonvanishing homotopy

1. Set h_t=f+t g for 0≤t≤1.

2. On the boundary |h_t|≥|f|−t|g|≥|f|−|g|.

3. The continuous positive difference has a positive minimumδ on the compact boundary.

4. Thus every h_t is boundary-nonzero uniformly in t; no h_t is identically zero.

### §4.N2 — Integer-valued zero count

1. Define N(t)=(2πi)⁻¹∮(f′+t g′)/(f+t g) dz.

2. Numerator and denominator vary continuously on the compact contour and the denominator is bounded away from 0; hence N is continuous in t.

3. By the argument principle each N(t) is a nonnegative integer.

4. A continuous map from the connected interval[0,1] into the integers is constant.

5. Therefore N(0)=N(1), proving equal zero counts for f and f+g.

## 5. Worked instance and boundary audit

On|z|=2 compare f=z³ and g=z+1. Then |g|≤3<8=|f|. Thus z³+z+1 has exactly three zeros inside|z|<2, counted with multiplicity, although no individual root is located.

**Boundary or failed-argument audit:**

With f(z)=z and g(z)=−1 on the unit circle, only |g|≤|f| holds. The endpoint z−1 has a boundary zero. Sense rejects the missing strict margin; the zero-count homotopy is not admissible.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `CA-04`, version 1, and the proof with every reuse. Intermediate exports E1–E2 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [Harvard complex analysis: Cauchy formula, argument principle, and Riemann mapping lectures](https://people.math.harvard.edu/~siu/math113/).

[Branch index](../README.md)
