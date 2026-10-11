# Parseval’s Identity for Fourier Series

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** HA-03  
**Level:** Intermediate    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

Under HA-01’s normalization, prove for every $f\in L^2(\mathbb T)$ that Fourier partial sums converge in $L^2$ and $\|f\|_2^2=\sum_{n\in\mathbb Z}|c_n|^2$.

**Foundations and permitted imports:**

Import HA-01’s finite projection identity and HA-02: Cesàro means of Fourier sums approximate every continuous periodic function uniformly. Also import density of continuous functions in L²(T) for normalized Lebesgue measure (obtainable from simple functions and approximation of measurable sets). These imports imply trigonometric-polynomial density, not pointwise convergence of ordinary sums.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Dense trigonometric polynomials
N2 [v1] Best approximation gives ordinary L² convergence
  N1 -- E1: Every L² function can be approximated in L² by a trigonometric polynomial. --> N2
N3 [v1] Parseval closure
  N2 -- E2: Ordinary Fourier partial sums converge to f in L². --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | Every L² function can be approximated in L² by a trigonometric polynomial. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | Ordinary Fourier partial sums converge to f in L². | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Dense trigonometric polynomials

**Object, role, and local target:** Combine two approximation errors. The required export is: Every L² function can be approximated in L² by a trigonometric polynomial.

**Inputs:** Continuous density in L²; uniform Fejér approximation; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-03.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Continuous density in L²; uniform Fejér approximation; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Combine two approximation errors. |
| Sense | Uniform Fejér convergence is used only for continuous h, not arbitrary L² f. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** Every L² function can be approximated in L² by a trigonometric polynomial. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Best approximation gives ordinary L² convergence

**Object, role, and local target:** Use a fixed approximating polynomial inside all sufficiently large frequency spaces. The required export is: Ordinary Fourier partial sums converge to f in L².

**Inputs:** Density and HA-01 projection identity; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-03.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Density and HA-01 projection identity; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Use a fixed approximating polynomial inside all sufficiently large frequency spaces. |
| Sense | The conclusion is L², not pointwise or uniform convergence. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** Ordinary Fourier partial sums converge to f in L². Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Parseval closure

**Object, role, and local target:** Pass the exact finite norm identity to the limit. The required export is: Parseval identity and L² Fourier reconstruction.

**Inputs:** Vanishing projection residual; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-03.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Vanishing projection residual; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Pass the exact finite norm identity to the limit. |
| Sense | Normalization must remain consistent throughout both approximation steps. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Parseval identity and L² Fourier reconstruction. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Dense trigonometric polynomials

1. For f∈L² and ε>0 choose continuous h with‖f−h‖₂<ε/2.

2. Choose a Fejér trigonometric polynomial p with‖h−p‖∞<ε/2.

3. Since measure(T)=1, ‖h−p‖₂≤‖h−p‖∞.

4. Thus‖f−p‖₂<ε.

5. The polynomial space is dense inL².

### §4.N2 — Best approximation gives ordinary L² convergence

1. Let S_Nf=∑_{|n|≤N}c_ne_n.

2. If p has frequencies at mostN, then f−S_Nf is orthogonal to S_Nf−p.

3. Hence‖f−p‖₂²=‖f−S_Nf‖₂²+‖S_Nf−p‖₂², so‖f−S_Nf‖₂≤‖f−p‖₂.

4. Choose p withinε by the preceding node, then retain that p for every N at least its degree.

5. Thus S_Nf→f inL².

### §4.N3 — Parseval closure

1. HA-01 gives‖f‖₂²=∑_{|n|≤N}|c_n|²+‖f−S_Nf‖₂².

2. The residual tends to 0; the nonnegative coefficient sums converge.

3. Therefore‖f‖₂²=∑_Z|c_n|², completing both target statements.

## 5. Worked instance and boundary audit

For the periodic square wave f=1 on(0,π) and−1 on(−π,0), ‖f‖₂²=1. Integration gives c_n=2/(π i n) for odd n and 0 for even n, including c₀=0. Parseval yields1=(8/π²)∑_{j≥0}1/(2j+1)², so the odd reciprocal-square sum is π²/8.

**Boundary or failed-argument audit:**

The square wave has jumps; uniform convergence of its continuous Fourier partial sums is impossible. Sense accepts the L² export and rejects promoting it to uniform convergence. Fejér’s theorem and ordinary partial-sum convergence concern different statements.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `HA-03`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
