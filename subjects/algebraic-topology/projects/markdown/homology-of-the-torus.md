# Homology of the Torus

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** AT-03  
**Level:** Intermediate    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

Compute integral homology of $T^2$: $H_0\cong\mathbb Z$, $H_1\cong\mathbb Z^2$, $H_2\cong\mathbb Z$, and $H_k=0$ for $k>2$.

**Foundations and permitted imports:**

Use the square quotient CW structure onT²: one vertexv, oriented edgesa,b, and one2-cellc attached alongaba⁻¹b⁻¹. Import cellular homology with integral coefficients: C_k is free on k-cells, and its differential is the attaching-map incidence degree after collapsing the other cells. Cellular homology agrees with singular homology. AT-02 supplies this model; itsπ₁ result is not required for the boundary computation.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Chain groups and edge boundary
N2 [v1] Face boundary
  N1 -- E1: The chain groups and zero degree1 differential. --> N2
N3 [v1] Homology and independent checks
  N1 -- E1: The chain groups and zero degree1 differential. --> N3
  N2 -- E2: The degree2 differential is zero. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | The chain groups and zero degree1 differential. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T1-3 | N1/v1, E1 | The chain groups and zero degree1 differential. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | The degree2 differential is zero. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Chain groups and edge boundary

**Object, role, and local target:** Count cells and compute endpoint incidences. The required export is: The chain groups and zero degree1 differential.

**Inputs:** The CW cell model; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AT-03.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain The CW cell model; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Count cells and compute endpoint incidences. |
| Sense | Identified endpoints still retain their opposite incidence signs. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** The chain groups and zero degree1 differential. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Face boundary

**Object, role, and local target:** Compute signed degree separately for each target edge. The required export is: The degree2 differential is zero.

**Inputs:** Attaching wordaba⁻¹b⁻¹; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AT-03.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Attaching wordaba⁻¹b⁻¹; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Compute signed degree separately for each target edge. |
| Sense | Counting appearances without orientation would incorrectly produce2a+2b. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** The degree2 differential is zero. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Homology and independent checks

**Object, role, and local target:** Compute kernels modulo images in each degree. The required export is: All integral homology groups in the target.

**Inputs:** Both zero differentials; prior exports E1/v1, E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AT-03.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Both zero differentials; prior exports E1/v1, E2/v1; keep their assumptions and versions attached. |
| Intellect | Compute kernels modulo images in each degree. |
| Sense | Euler characteristic alone cannot determine every homology group or its torsion. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** All integral homology groups in the target. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Chain groups and edge boundary

1. The cellular chain groups areC₂=Z⟨c⟩, C₁=Z⟨a,b⟩, C₀=Z⟨v⟩ and zero in higher degrees.

2. Both endpoints of each edge arev, with opposite endpoint signs, so∂₁a=v−v=0 and∂₁b=0.

### §4.N2 — Face boundary

1. Collapse all1-cells excepta when computing the coefficient ofa in∂₂c.

2. The attaching loop crossesa once forward and once backward, giving degree1−1=0.

3. The same calculation for b gives 0.

4. Therefore∂₂c=0a+0b.

5. This is a signed incidence computation, not an assumption that every closed surface has zero cellular boundary in every chosen decomposition.

### §4.N3 — Homology and independent checks

1. The chain complex is 0→Z→⁰Z²→⁰Z→0, soH₂=ker∂₂=Z, H₁=ker∂₁/im∂₂=Z², H₀=C₀/im∂₁=Z, andH_k=0 for k>2.

2. Its alternating rank sum1−2+1=0 matches the cell count.

3. If independently using AT-02, H₁ matches the abelianization of π₁(T²)=Z².

4. These checks support consistency but the kernel/image computation establishes the groups.

## 5. Worked instance and boundary audit

The oriented2-cellc is a generator ofH₂ because its boundary is 0 and there are no3-cells to make it a boundary. The classesa,b independently generateH₁; an integer cycle3a−2b is nonzero because im∂₂=0.

**Boundary or failed-argument audit:**

ForRP² the2-cell attaches by a degree2 loop, so∂₂ is multiplication by 2 andH₁=Z/2, H₂=0. Sense uses this comparison to reject the claim that all face boundaries vanish merely because an attaching word is closed.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `AT-03`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [Allen Hatcher, Algebraic Topology: covering spaces, cellular homology, and cap products](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf).

[Branch index](../README.md)
